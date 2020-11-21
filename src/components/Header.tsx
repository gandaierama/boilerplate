import { HeaderS } from 'styles'


const Header = () => {
  return (
    <HeaderS className="header p-3">
    <div className="container">
      <div className="row">

        <div className="col-12 col-md-7">
        	<div className="logoHeader">
        		<a href="/"><img src="/assets_next/images/logo.png" className="logo" /></a>
        	</div>
        </div>

        <div className="col-12 col-md-5 d-none d-md-block">
          <a className="btn btn-success float-right " href='/painel'>Entrar</a>
        </div>
			</div>
		</div>
    </HeaderS>
  )
}
export default Header
