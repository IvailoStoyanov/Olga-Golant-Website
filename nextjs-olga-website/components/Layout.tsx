
function Layout(props: any) {
  console.log(props);
  
  return (
    <div className="page-layout">
      {props.children}
    </div>
  );
}

export default Layout;
