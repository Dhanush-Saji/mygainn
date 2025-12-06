
'use client'

import { AppStoreButton, GooglePlayButton } from "react-mobile-app-button";

const AppDownloadBtnSection = ({ playStoreLink, appStoreLink }) => {
    return (
        <>
            <GooglePlayButton width={190} height={60}
                url={playStoreLink}
                theme={"dark"}
                className={"custom-style"}
            />
            <AppStoreButton width={190} height={60}
                url={appStoreLink}
                theme={"dark"}
                className={"custom-style"}
            />
        </>
    );
};

export default AppDownloadBtnSection;