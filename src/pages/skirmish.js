import * as React from 'react'
import Layout from '../components/layout/Layout'
import SkirmishCalculator from '../components/SkirmishCalculator'

const SkrimishPage = () => {
    return (
        <Layout>
            <SkirmishCalculator></SkirmishCalculator>
        </Layout>
    )
}

export const Head = () => <title>Skirmish reward track calculator</title>

export default SkrimishPage