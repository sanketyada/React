import Mobile  from "./Mobile";
function MobileTab(){
    return(
        <div>
            <Mobile brand="Apple" name="Iphone-xs" storage={128} price={27000}/>
            <Mobile brand="Samsung" name="A12" storage={128} price={20000}/>
        </div>
    )
}
export default MobileTab;