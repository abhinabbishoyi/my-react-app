function Car(props) {
    return <h2>Hi, I am a Car! {props.brand}</h2>;
  }
  
  function Garage() {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
      </>
    );
  }
  export default Garage;