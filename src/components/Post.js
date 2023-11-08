import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Post() {
    const { post_id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
            .then((response) => {
                // Handle the API response here
                if (response.data) {
                    console.log(response.data.body);
                    setPost(response.data)
                }
            })
            .catch((error) => {
                console.log("An error occured", error);
                setPost(null);
            });
    }, [post_id]);


    return (
        <div className="container">
            {post ? (
                <div>
                    <h4>{ post.title }</h4>
                    <p>{post.body}</p>
                </div>
            ) : (
                <p>Loading post data...</p>
            )}
        </div>
    )

}

export default Post;