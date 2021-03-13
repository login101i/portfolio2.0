import React from 'react'

function MenuItems({ menuItem }) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item) => {
                    return <div className="portfolio" key={item.id} style={{margin:'10px'}}>
                        <div className="image-data">
                            <img src={item.image} alt="" style={{ objectFit: 'contain' }} />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1}>{item.icon1}</a>
                                    <a href={item.link2}>{item.icon2}</a>
                                </li>
                            </ul>
                        </div>
                        <h5 style={{ textAlign: 'center' }}>
                            {item.title}
                        </h5>

                    </div>
                })
            }
        </div >
    )
}

export default MenuItems;
