import {Button} from "semantic-ui-react";

export default function LoginButton() {
    return (
        <Button onClick={() => {
            window.location.replace(`https://discord.com/api/oauth2/authorize?client_id=695899835953578025&redirect_uri=http://localhost:3000/api/callback&response_type=code&scope=identify%20email`)
        }}>Login</Button>
    )
}