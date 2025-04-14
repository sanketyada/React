import Wine  from "./Wine";
function WineTab(){
    let state=["Uttar Pradesh","Bihar","Telangana","J&k"]
    return (
        <div>
            {/* <Wine name="Old Monk" price={280} category={{a:"Male",b:"Female"}}/>
            <Wine name="Royal Stage" price={1200} category={{a:"Male",b:"Female"}}/>
            <Wine name="Nimbu Masti" price={70} category={{a:"Male",b:"Female"}}/> */}
            <Wine name="Nimbu Masti" price={70} category={{a:"Male",b:"Female"}} SoldState={state}/>
        </div>
    )
}
export default WineTab;