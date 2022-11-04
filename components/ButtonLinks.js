import ButtonLink from "./ButtonLink"
import style from "./ButtonLinks.module.scss"

const ButtonLinks = ({ blok }) => {
  return (
    <div className={style["button-links"]}>
    {
      blok && blok.buttons ?
      blok.buttons.map((b, index) => {
          return (
            <ButtonLink blok={b} key={index} />
          )
        }) : null
    }
    </div>
  )
}

export default ButtonLinks