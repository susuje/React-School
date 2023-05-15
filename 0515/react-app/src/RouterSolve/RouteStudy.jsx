import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";

function RouteStudy() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        {/* path = "/" 이 주소로 왓을때 Index컴포넌트보여준다 */}
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three/*" element={<Outlet />}>
            <Route path="" element={<HojunIndex/>}/>
            <Route path="hojunone/" element={<HojunOne/>}/>
            {/* http://localhost:3000/three/hojunone */}
            <Route path="hojuntwo/" element={<HojunTwo/>}/>
        </Route>
        <Route path="/blog/:s" element={<Blog />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello HOME</h1>
}

function One({name}){
  return <h1>{name} 여기는 /one입니다.</h1>
}

function Two(){
  return <h1>hello world2</h1>
}


function Blog(){
	const location = useLocation();
  console.log(location);
  const {s} = useParams()
  return <h1>hello Blog{s}</h1>
}

function HojunIndex(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun index</h1>
}

function HojunOne(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun 1</h1>
}

function HojunTwo(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun 2</h1>
}

export default RouteStudy;

// <Outlet />  주소에상관없이보여주고싶은것. 라우트안에서 작성한 컴포넌트를 빼내주는애.
//  Route path="/three/*" 여기서 *은 생략해도댐.
// Route path="/three/  주소에따라  Hojunone이 outlet에 들어감.