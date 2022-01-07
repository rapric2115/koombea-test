import React, { useState } from 'react';
import { FiStar } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

import { update, ref } from 'firebase/database';
import { db } from '../connections/firebase';

// const url = ' https://my-json-server.typicode.com/rapric2115/koombea-test';
const url = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))

// Trying to make price pill background change according to the current position
const getBackgroundColor = (n) => {
    const even = (a) => {
        return Math.abs(a % 2 == 1)
    }
    
    if( even(n) === 1 ) {
        return '#42BA96'
    } else {
        return '#F2C94C'
    }   
}


const Post = (props) => {
    const post = props.data;
    
    // handle Favorites and updating if is favorite or not boolean.
    const handleFavorites = (d, e) => {
        if(d.isFavorite) {
            console.log(true)
            update(ref(db, `/post/id${d.id}`), {
                isFavorite: false
            })
        } else {
            console.log(false)
            update(ref(db, `/post/id${d.id}`), {
                isFavorite: true
            })
        }
    }

    // initial data to populate before getting into database.
    const data = [
        {id: 1, title: 'Keeping the dream alive by traveling the world', 
        text: 'Integrate the latest technologies with an innovative platform', 
        avatar: 'https://uploads-ssl.webflow.com/5c6f0fe289c368004b71d711/5cb7772b6c8746a0839f0ff6_nicole-bg.jpg', 
        avatarName: 'Alive cooper', date: 'may 02', price: '49', isFavorite: true,
         bgImage: 'https://digitalmediathoughts.com/wp-content/uploads/2019/02/b1f7b5667a70cdc5667c7980727bd53e-1024x683.jpeg'},
        {id: 2, title: 'Keeping the dream alive by traveling the world',
         text: 'Integrate the latest technologies with an innovative platform', 
         avatar: 'https://uploads-ssl.webflow.com/5c6f0fe289c368004b71d711/5cb7772b6c8746a0839f0ff6_nicole-bg.jpg', 
         avatarName: 'Alive cooper', date: 'may 02', price: '49', isFavorite: true, 
         bgImage: 'https://www.shillingtoneducation.com/content-blog/uploads/2017/02/Designers-working-behind-a-computer.jpeg'},
        {id: 3, title: 'Keeping the dream alive by traveling the world', text: 'Integrate the latest technologies with an innovative platform', avatar: 'https://uploads-ssl.webflow.com/5c6f0fe289c368004b71d711/5cb7772b6c8746a0839f0ff6_nicole-bg.jpg', avatarName: 'Alive cooper', date: 'may 02', price: '49', isFavorite: true, bgImage: 'https://www.kilianjornet.cat/img/blog/355/resized_t5_IMG_2160_258.JPG'},
        {id: 4, title: 'Keeping the dream alive by traveling the world', 
        text: 'Integrate the latest technologies with an innovative platform', 
        avatar: 'https://uploads-ssl.webflow.com/5c6f0fe289c368004b71d711/5cb7772b6c8746a0839f0ff6_nicole-bg.jpg', 
        avatarName: 'Alive cooper', date: 'may 02', price: '49', isFavorite: true,
         bgImage: 'https://www.kilianjornet.cat/img/blog/355/resized_t5_IMG_2160_258.JPG'},
        {id: 5, title: 'Keeping the dream alive by traveling the world', text: 'Integrate the latest technologies with an innovative platform', avatar: 'https://uploads-ssl.webflow.com/5c6f0fe289c368004b71d711/5cb7772b6c8746a0839f0ff6_nicole-bg.jpg', avatarName: 'Alive cooper', date: 'may 02', price: '49', isFavorite: true, bgImage: 'https://digitalmediathoughts.com/wp-content/uploads/2019/02/b1f7b5667a70cdc5667c7980727bd53e-1024x683.jpeg'},
        {id: 6, title: 'Keeping the dream alive by traveling the world', text: 'Integrate the latest technologies with an innovative platform', avatar: 'https://uploads-ssl.webflow.com/5c6f0fe289c368004b71d711/5cb7772b6c8746a0839f0ff6_nicole-bg.jpg', avatarName: 'Alive cooper', date: 'may 02', price: '49', isFavorite: true, bgImage:  'https://digitalmediathoughts.com/wp-content/uploads/2019/02/b1f7b5667a70cdc5667c7980727bd53e-1024x683.jpeg'},
    ]
    
    const searchData = props.search;
    return (
        <div className="postContainer">
            {/* Filter values by favorites post */}
            {post.filter((val) => {
                if(searchData === '') {
                    return post
                } else if(searchData.toLowerCase().includes('favoritos') || searchData.toLowerCase().includes('favorite')) {
                    return val.isFavorite
                }
            }).map((d, i) => (
                <div key={i} className="max-w-sm w-80 bg-white rounded overflow-hidden mx-auto my-8">
                    <div className="space-x-44 inline-flex absolute mt-2 ml-0">
                        <p className="bg-red-500 text-white w-24 text-center mt-4 ml-4 rounded-full uppercase pillPrice" style={{backgroundColor: getBackgroundColor(i)}}>${d.price}/MO</p>
                        {/* This to check what post is user Favorite */}
                        {/* {!d.isFavorite ? 
                            (<FiStar className="mt-4 ml-4 cursor-pointer" onClick={() => handleFavorites(i, d.isFavorite)} /> ):
                            (<AiFillStar className="mt-4 ml-4 yellow cursor-pointer" onClick={() => handleFavorites(i, d.isFavorite)} />)
                        } */}
                        { d.isFavorite ? 
                            (<AiFillStar className="mt-4 ml-4 yellow cursor-pointer" onClick={() => handleFavorites(d, i)} />)
                            :(<FiStar className="mt-4 ml-4 cursor-pointer" onClick={() => handleFavorites(d, i)} /> )
                        }
                    </div>
                    <img className="w-full" src={d.bgImage} alt="Sunset in the mountains" />
                    <div className="borderImg"></div>
                    <div className="px-6 py-4 carText">
                        <div className="font-bold text-xl mb-2">{d.title}</div>
                        <p className="text-gray-600 text-base">
                            {d.text}
                        </p>
                    </div>
                    <div className="px-6 py-4 carText space-x-14 inline-flex">
                        <div className="avatar sm:inline-flex inline-flex">
                            <img src={d.avatar} className="inline-block border-radius px-3 py-1 w-14 h-10" />
                            <span className="inline-block px-1 py-2 text-sm font-semibold text-gray-600 sm:px-0">{d.avatarName}</span>
                        </div>
                        <span className="inline-block px-3 py-2 text-sm font-semibold text-gray-600">{d.date}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Post;