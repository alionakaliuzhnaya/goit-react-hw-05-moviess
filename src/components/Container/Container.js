  import propTypes from "prop-types"
  import { Containers } from "./Container.styled"

  export default function Container ({children}){
      return <Containers>{children}
      </Containers>

  }

  Container.propTypes={
      children:propTypes.array
  }