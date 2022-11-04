import React from "react"
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react"

import { ProductProvider } from "../context/product"
import Layout from "../components/Layout"

export default function Page({
  story,
  products
}) {
  useStoryblokState(story)
  return (
    <>
      <ProductProvider>
        <Layout products={products} title={story.content.seo ? story.content.seo.title : "RE:DO - Plant Based Food" } description={story.content.seo ? story.content.seo.description : 'RE:DO - Plant Based Food'}>
          <StoryblokComponent blok={story.content} />
        </Layout>
      </ProductProvider>
    </>
  )
}

export async function getStaticProps({
  params,
  preview = false,
}) {
  const home = "home"
  let slug = params.slug ? params.slug.join("/") : home
  let sbParams = {
    version: "draft", // or "published"
    language: null,
  }

  if (preview) {
    sbParams.version = "draft"
    sbParams.cv = Date.now()
  }

  const storyblokApi = getStoryblokApi()

  const story = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)
  const products = await storyblokApi.getStories({
    starts_with: "products/",
    ...sbParams
  })

  return {
    props: {
      story: story ? story.data.story : false,
      products: products ? products.data.stories : [],
      preview,
    },
    revalidate: 3600, // revalidate every hour
  }
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get("cdn/links/")

  let paths = []
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug
    let splittedSlug = slug.split("/")
    if (slug === "home") splittedSlug = false
    if (!splittedSlug) {
      paths.push({ params: { slug: splittedSlug }, locale: null })
      paths.push({ params: { slug: slug.split("/") }, locale: null })
      return
    }
    // create additional languages
    paths.push({ params: { slug: splittedSlug }, locale: null })
  });

  return {
    paths: paths,
    fallback: false,
  };
}