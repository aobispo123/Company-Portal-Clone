import React from "react";

import useAxios from './useAxios.js';

const AxiosAPI = () => {

    const { response, loading, error } = useAxios({

        method: 'post',
        url: '/post',
        headers: { 
            'Content-Type': 'application/json'
        },
        data:{
          credentials: {username: "morgoth",
                        password: "simlaril"},
          announcement: {title: "RE: The Valar",
                         message: "Lets eat their cool lights",
                         company: "Orodruin", author: "Melkor"}
        }
      })

    return (
        <div className='api'>
            <h1>Posts</h1>

            {loading ? ( <p>loading...</p>) : 
             (
                <div>
                    {error && (
                        <div>
                            <p>{error.message}</p>
                        </div>
                    )}
                    <div>
                        {/* {response && <p>{ response[0].title }</p>} */}
                        {console.log(JSON.parse(response.data))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AxiosAPI;