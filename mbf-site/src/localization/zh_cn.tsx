import { Eng } from "./en";

export const ZhCn = {
    __proto__: Eng,

    title: function (SourceUrl: string) {
        return <>
            <h1>
                <span className="initial">M</span>
                <span className="title">ods</span>
                <span className="initial">B</span>
                <span className="title">efore</span>
                <span className="initial">F</span>
                <span className="title">riday</span>
                <span className="initial">!</span>
                <p className="williamGay">william gay</p>
            </h1>
            <a href={SourceUrl} target="_blank" rel="noopener noreferrer" className="mobileOnly">Source Code</a>
            <p>为Quest上节奏光剑安装模组的最简方案！</p>
        </>
    },

    toGetStart:
        <p>若要开始，将你的Quest设备通过typec线连接至此设备，并点击下面的按钮。</p>
    ,

    noInternet: <>
        <h1>没有互联网</h1>
        <p>It seems as though <b>your Quest</b> has no internet connection.</p>
        <p>To mod Beat Saber, MBF needs to download files such as a mod loader and several essential mods.
            <br />This occurs on your Quest's connection. Please make sure that WiFi is enabled, then refresh the page.</p>
    </>
}