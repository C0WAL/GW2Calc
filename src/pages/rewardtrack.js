import * as React from 'react'
import Layout from '../components/layout/Layout'
import { Seo } from '../components/common/SEO'
import RewardTrackCalculator from '../components/RewardTrackCalculator'

const RewardTrackPage = () => {
    return (
        <Layout>
            <RewardTrackCalculator/>
        </Layout>
    )
}

export const Head = () => (
    <Seo title="WvW rewardtrack calculator"/>
)

export default RewardTrackPage