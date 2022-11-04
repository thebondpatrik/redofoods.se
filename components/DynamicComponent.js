import Placeholder from "./Placeholder"
import Page from "./Page"
import Section from "./Section"
import Row from "./Row"
import Content from "./Content"
import Picture from "./Picture"
import StoreList from "./StoreList"
import Labels from "./Labels"
import ButtonLink from "./ButtonLink"
import ButtonLinks from "./ButtonLinks"
import Table from "./Table"


const Components = {
  page: Page,
  section: Section,
  row: Row,
  content: Content,
  picture: Picture,
  store_list: StoreList,
  labels: Labels,
  button_link: ButtonLink,
  button_links: ButtonLinks,
  table: Table,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return <Placeholder componentName={blok.component} />
};

export default DynamicComponent