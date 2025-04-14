import './AmazonProduct.css'
import Price from './Price.jsx';
function AmazonProduct({name,idx}){
    let oldPrice=[1,2,3,4];
    let newPrice=[2,4,6,8];
    let des=[

    ["8000 DPI","5 Programmable Buttons"],
    ["8000 DPI","5 Programmable Buttons"],
    ["8000 DPI","5 Programmable Buttons"],
    ["8000 DPI","5 Programmable Buttons"],

    ];
    let style={
        border:"2px solid black",
        borderRadius:"10px",
        margin:"10px",
        width:'200px'

    }
    return (
        <div className="AmazonProduct" style={style}>
            <h3>{name}</h3>
            <p>{des[idx][0]}</p>
            <p>{des[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]}
            newPrice={newPrice[idx]}/>
        </div>
    )
}
export default AmazonProduct;