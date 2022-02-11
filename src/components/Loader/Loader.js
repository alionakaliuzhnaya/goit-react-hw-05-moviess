import { TailSpin } from  'react-loader-spinner'

const Loader =()=>{
    return(
        <TailSpin
      heigth="100"
      width="100"
      color='grey'
      ariaLabel='loading'
    />
    )
}

export default Loader;