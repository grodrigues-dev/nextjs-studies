import User from "../components/user"
import styled from "styled-components";


const Title = styled.h1`
    font-size: 40px;
    color: ${({theme})=> theme.colors.primary};
`

function UserList({ users }) {
    return (
        <>
        <Title>List of users</Title>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <User user={user}/>
                        </div>
                    )
                })
            }
        </>
    )
    
}

export default  UserList;

UserList.getLayout = function PageLayout(page) {
    return (
        <>
            { page }
        </>
    )

}
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: {
            users: data
        }
    }
}

