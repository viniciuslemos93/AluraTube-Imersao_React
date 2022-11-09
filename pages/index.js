import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estilosHomePage = {
        //backgroundColor: "red"
    };
    
    const [valorDoFiltro, setValorDoFiltro] = React.useState("Angular");

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <Header />
                <TimeLine searchValue={valorDoFiltro} playlists={config.playlists}>
                    Conteúdo
                </TimeLine>

            </div>
        </>
    );
}

export default HomePage

/*function Menu() {
    return (
        <div>
            Menu
        </div>
    )
}*/

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
  `;
const  StyledBanner = styled.div`
    background-color: red;
    //background-image: url(${config.bg});
    background-image: url(${({ bg }) => bg});
    height: 230px;
`;
function Header() {
    return (
        <StyledHeader>
            <StyledBanner bg={config.bg} />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.nome}
                    </h2>
                    <p>
                        {config.cargo}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function TimeLine({searchValue, ...propriedades}) {
    //console.log("Dentro do componente", propriedades.playlists);
    const playlistsNames = Object.keys(propriedades.playlists);
    return (
        <StyledTimeline>

            {playlistsNames.map((playlistsName) => {
                const videos = propriedades.playlists[playlistsName];
                console.log(playlistsName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistsName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase(); //Este trecho trata de não diferenciar letrar maiúsculas e minúsculas
                                const searchValueNormalized = searchValue.toLowerCase();//Este trecho trata de não diferenciar letrar maiúsculas e minúsculas
                                return titleNormalized.includes(searchValueNormalized)//A função includes() verifica se o que está sendo digitado é igual ao que está procurando.
                            })
                            .map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}