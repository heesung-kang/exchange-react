import React, { FunctionComponent } from 'react'
import PC from '@components/index/PC'
import Mobile from '@components/index/Mobile'
import styles from '@styles/index.module.scss'
import Footer from '@components/common/Footer'
const Index: FunctionComponent = (): JSX.Element => {
  return (
    <section className={styles.wrap}>
      <PC />
      <Mobile />
      <Footer />
    </section>
  )
}

export default Index
