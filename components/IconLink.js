import cn from "classnames"
import styles from "./IconLink.module.scss"
import instagram from "./../public/instagram.svg"
import phone from "./../public/phone.svg"
import email from "./../public/email.svg"


const IconLink = ({ blok }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case "instagram":
        return (<img src={instagram.src} alt="Follow us on Instagram" />)
      case "email":
        return (<img src={email.src} alt="Contact us on email" />)
      case "phone":
        return (<img src={phone.src} alt="Contact us on phone" />)
    }
  }
  return (
  <span className={cn(styles["icon-link"], styles[blok.icon])}>
      {
        blok.icon ? 
          getIcon(blok.icon)
        : null
      }
      <a href={blok.link.url}>
        {blok.link_text}
      </a>
    </span>
  )
}

export default IconLink