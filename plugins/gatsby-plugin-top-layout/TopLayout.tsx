import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

export default function TopLayout(props: any) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="language" content="en"/>
        <title>4RTools - Official Website</title>
        <meta name="description" content="4RTools is an 100% free and opensource Autopot, Autobuff, Skill Spammer, Macro and Switcher for Ragnarok Online."/>
        <meta name="robots" content="index"/>
        <meta name="author" content="4RTools Development Team"/>
        <meta name="keywords" content="Ragnarok Online,Autopot,Macro,Opensource,Orange,Tools,4RTools,4R"/>

        <meta property="og:type" content="page"/>
        <meta property="og:url" content="https://www.4rtools.com.br"/>
        <meta property="og:title" content=""/>
        <meta property="og:image" content="https://raw.githubusercontent.com/4RTools/4RTools/main/assets/images/combo-tools.png"/>
        <meta property="og:description" content="4RTools is an 100% free and opensource Autopot, Autobuff, Skill Spammer, Macro and Switcher for Ragnarok Online."/>

        <meta property="article:author" content="4RTools Development Team"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@"/>
        <meta name="twitter:title" content=""/>
        <meta name="twitter:creator" content="@"/>
        <meta name="twitter:description" content="4RTools is an 100% free and opensource Autopot, Autobuff, Skill Spammer, Macro and Switcher for Ragnarok Online."/>
    
        <link
          href="https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/qa/foundation/typefaces/globotipo.css"
          rel="stylesheet"
        />
      </Helmet>
        {props.children}
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
