import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className={'py-3'}>
                <Container>
                    <Switch>
                        <Route path={'/'} component={HomeScreen} exact={true} />
                        <Route
                            path={'/product/:id'}
                            component={ProductScreen}
                        />
                    </Switch>
                </Container>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default App
