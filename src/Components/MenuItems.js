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
                                    <a href={item.link1}> More </a>
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
