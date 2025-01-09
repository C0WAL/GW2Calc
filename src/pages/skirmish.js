import * as React from 'react'
import Layout from '../components/layout/Layout'
import SkirmishCalculator from '../components/SkirmishCalculator'
import { Seo } from '../components/common/SEO'

const SkrimishPage = () => {
    return (
        <Layout>
            <SkirmishCalculator></SkirmishCalculator>
        </Layout>
    )
}

export const Head = () => (
    <Seo title="Skirmish rewardtrack calculator"/>
)

export default SkrimishPage