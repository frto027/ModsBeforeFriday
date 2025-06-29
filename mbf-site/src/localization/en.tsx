/*
How to add an item to localization text:
1. add something to Eng object
2. use getLang() from "src/localization/shared.ts" to access the localized Eng object
*/

export const Eng = {
    __proto__: null,

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
            <p>The easiest way to install custom songs for Beat Saber on Quest!</p>
        </>
    },

    toGetStart:
        <p>To get started, plug your Quest in with a USB-C cable and click the button below.</p>
    ,

    noInternet: <>
        <h1>No internet</h1>
        <p>It seems as though <b>your Quest</b> has no internet connection.</p>
        <p>To mod Beat Saber, MBF needs to download files such as a mod loader and several essential mods.
            <br />This occurs on your Quest's connection. Please make sure that WiFi is enabled, then refresh the page.</p>
    </>
}