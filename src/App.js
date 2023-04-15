import Layout from "./components/layout";
import Filters from "./components/filters";
import Profile from "./components/profile";
import RepoList from "./components/repo-list";
import Search from "./components/search";
import {useEffect, useState} from "react";
import {getRepos, getUser} from "./services/users";
import {useParams} from "react-router-dom";
import Modal from "./components/modal";

function App() {
    let {userName} = useParams();
    if (!Boolean(userName)) {
        userName = 'eduardogarciabautista';
    }
    const [user, setUser] = useState({});
    const [repo, setRepos] = useState([]);
    const [isActive, setIsActive] = useState(false);


    useEffect(() => {
        getUser(userName).then(({data, isError}) => {
            if (isError) {
                console.log("No se pudo obtener el usuario");
                return;
            }
            setUser(data);
        });
        getRepos(userName).then(({data, isError}) => {
            if (isError) {
                console.log("No se pudo obtener los repositorios");
                return;
            }
            setRepos(data);
        });
    }, [userName]);

    return (
        <Layout>
            <Modal isActive={isActive} setIsActive={setIsActive}/>
            <Profile {...user} />
            <Filters/>
            <RepoList repoList={repo}/>
            <Search setIsActive={setIsActive}/>
        </Layout>
    );
}

export default App;
