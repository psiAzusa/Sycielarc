import { useState } from "react";

function ProfileComponent(props: { data: object }) {
    const data = {
        username: "psiAzusa",
        profile_pic: "https://avatars.githubusercontent.com/u/102921617?v=4",
        n_article: 53,
        n_category: 5,
        n_tags: 87,
        link_github: "https://github.com/psiAzusa",

    }

    const [onHoverProfilePic, setOnHoverProfilePic] = useState(false);

    const styles: { [id: string]: React.CSSProperties }
        = {
        "container": {
            textAlign: 'center',
            backgroundColor: "lightgrey",
            paddingTop:10,
            paddingBottom: 10,
            display:'flex',
            flexDirection: 'column',
            alignItems:'center',
        },
        "image": {
            height: 188,
            width: 188,
            borderRadius: "50%",
            borderWidth: "2px",
            borderColor: "black",
            padding: 2,
            borderStyle: "solid",
            
            cursor: 'pointer',
            transition: "2.5s",
            transform: onHoverProfilePic?"rotateZ(180deg)": "",

        },
        "username": {
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 20,
        },
        "sub_container": {
            display: 'flex',
            flexDirection: 'row',
            width:"80%",
            //backgroundColor:'grey'
            
        },
        
    };

    return (
        <div style={styles.container}>
            <img
                style={styles.image}
                src={data.profile_pic}
                alt={data.username}
                onMouseEnter={() => { setOnHoverProfilePic(true) }}
                onMouseLeave={() => { setOnHoverProfilePic(false) }}
            />
            <text style={styles.username}>{data.username}</text>
            <div style={styles.sub_container}>
                <div style={{flex:1, display:'flex', flexDirection:'column'}}>
                    <text>{ data.n_article}</text>
                    <text>Articles</text>
                </div>
                <div style={{flex:1, display:'flex', flexDirection:'column'}}>
                    <text>{ data.n_article}</text>
                    <text>Category</text>
                </div>
                <div style={{flex:1, display:'flex', flexDirection:'column'}}>
                    <text>{ data.n_article}</text>
                    <text>Tags</text>
                </div>
            </div>

        </div>
    );
}

export default ProfileComponent;