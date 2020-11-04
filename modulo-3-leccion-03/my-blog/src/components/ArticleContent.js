import React from "react";
import Paragraph from "./Paragraph";

class ArticleContent extends React.Component {
  render() {
    
    return (
      <>
        <h2 className={this.props.styleClass}>{this.props.title}</h2>
        <h4 className="article__subtitle">{this.props.subtitle}</h4>
        <section className="article__content">
          <p className="article__content--paragraph">
            Kizzmekia "Kizzy" Shanta Corbett (born January 26, 1986) is an American viral immunologist at the Vaccine
            Research Center (VRC) at the National Institute of Allergy and Infectious Diseases, National Institutes of
            Health (NIAID NIH) based in Bethesda, Maryland. Appointed to the VRC in 2014, she is currently the
            scientific lead of the VRC's Coronavirus Team, with research efforts aimed at propelling novel coronavirus
            vaccines, including a COVID-19 vaccine.
          </p>
          <Paragraph
            title="Early life and education"
            text="Corbett was born in Hurdle Mills, North Carolina to Rhonda Brooks. She grew up in Hillsborough, a rural town
            in North Carolina, where she had a large family of step-siblings and foster siblings."
            styleH4={this.props.styleH4}
          ></Paragraph>
          <Paragraph
            title="Career"
            text="While in high school, Corbett realized that she wanted to pursue a scientific career, and as part of a
            program called ProjectSEED, spent her summer holiday working in research laboratories, one of which was at
            UNC's Kenan Labs with organic chemist James Morkin. In 2005, she was a summer intern at SUNY StonyBrook in
            Gloria Viboud's lab where she studied Yersinia pseudotuberculosis pathogenesis. From 2006 to 2007, she
            worked as a lab tech in Susan Dorsey's lab at the University of Maryland School of Nursing."
            styleH4="green"
          ></Paragraph>
          <h3></h3>
          <p className="article__content--paragraph"></p>
        </section>
      </>
    );
  }
}

export default ArticleContent;
