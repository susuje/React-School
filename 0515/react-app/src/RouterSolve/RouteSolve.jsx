import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";

function RouteSolve() {
    const productIds = [1,2,3,4,5]
  return (
    
    <BrowserRouter>
    <h1>퀴즈</h1>
      <Link to="/"> 홈페이지 </Link> <br/>
      {productIds.map((productId) => (
        <>
        <Link to={`/products/${productId}`}>상품{productId}</Link><br/>
        </>
      ))}
      <Link to="/users"> Users </Link><br/>
      <Link to="/cart"> Cart </Link>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products/:id" element={<Products />}/>
        <Route path="/products/:id/notice" element={<ProductNotice />}/>
        <Route path="/cart" element={<Cart name='licat' />}/>

        <Route path="/users/" element={<Users />}>
            <Route path="coupon" element={<div>쿠폰</div>}/>
            <Route path="question" element={<div>퀘스션</div>}/>
            <Route path="notice" element={<div>노티스</div>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

function HomePage(){
  return <h1>홈페이지</h1>
}

function Cart({name}){
  return <h1>{name} 여기는 Cart입니다.</h1>
}

function Users(){
  return (
    <>
    <br/>
    <Link to="/users/coupon"> UsersCoupon </Link>
    <br/>
      <Link to="/users/notice"> UsersNotice </Link>
      <br/>
      <Link to="/users/question"> UsersQuestion </Link>
      <br/>
    <h1>여기는 Users</h1>
    <Outlet/>

    </>
  )
}



function Products(){

  const {id} = useParams()
  return (
    <>
        <h1>hello Products{id}</h1>
        <Link to="./notice">Notice</Link>
        {/* ./는 현재경로이다. */}
        {/* 성퓸5를 누르면 products/5/notice 이렇게됨 */}
    </>
  )
}

function ProductNotice(){

    const {id} = useParams()
    return <h1>hello Products{id} Notice</h1>
    }
    


export default RouteSolve;

//구조분해할당
//const obj = {id:1,name:'크롱'}
//const {id,name} =obj 
// id //1
// name 크롱