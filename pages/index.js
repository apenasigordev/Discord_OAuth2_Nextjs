import jwt from 'jsonwebtoken';
import * as cookie from 'cookie';
import LoginButton from "../components/LoginButton";
import Logined from "../components/Logined";

export async function getServerSideProps(ctx) {
    let key = null;
    try {
        const cookies = cookie.parse(ctx.req.headers.cookie);
        const user = cookies.token;
        key = jwt.verify(user, process.env.JWT_KEY)
    } catch {
        key = null;
    }
    return {
        props: {
            user: key
        }
    }
}

export default function Home({ ...key }) {
    const data = key.user;
    return (
        <div className='text-center my-20'>
            {(data === null) ? (<LoginButton />) : (<Logined userdata={data} />)}
        </div>
    )
}