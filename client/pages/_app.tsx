import "../styles/globals.css";
import {store} from "../store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {AppProps} from "next/app";
import {HistoryProvider} from "../hooks/historyProvider";
const persistor = persistStore ( store );

function MyApp ( {Component, pageProps}: AppProps, props: any ) {

    return (
        <HistoryProvider>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </HistoryProvider>
    );
}

export default MyApp;
