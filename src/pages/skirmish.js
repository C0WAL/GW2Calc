import * as React from 'react'
import Layout from '../components/layout'
import SkirmishCalculator from '../components/skirmish-calculator'

const SkrimishPage = () => {
    return (
        <Layout>
            <SkirmishCalculator></SkirmishCalculator>
        </Layout>
    )
}

export const Head = () => {
    <>
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
        <title>GW2Calc</title>
    </>
}
export default SkrimishPage