import React from 'react'

function MenuItems({ portoflioss }) {
    return (
        <div className="portfolis">
            {
                portoflioss.map((item) => {
                    return <div className="portfolio" key={item.id} style={{ margin: '10px' }}>
                        <div className="image-data">
                            <img src={item.image} alt="" style={{ objectFit: 'contain' }} />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1} target="_blank"> More </a>
                                </li>
                            </ul>
                        </div>
                        <h5 style={{ textAlign: 'center', }}>
                            {item.title}
                        </h5>
                        <div style={{ color: "#222" }} className="github" >
                            <a href={item.link2} style={{ textAlign: 'center' }} target="_blank">Source code on github</a>
                        </div>


                    </div>
                })
            }
        </div >
    )
}

export default MenuItems;
