---
layout: project
color: "#f74949"
logo: Precision Interfaces
tagline: 
# Tags is a comma separated list of the publication tags in _data/pubs.yml
tags: 
- pi
---

<div class="callout">
An Interface for Every Task
</div>


Interactive data analysis tools help make data analysis and exploration both efficient and more accessible to a broad population.  Simple interfaces, such as a time-range filter on the [Google Finance](http://finance.google.com) stock visualization, as well as complex visual exploration interfaces such as Tableau, are effective because they are tailored to the desired user tasks.  Designing such interactive interfaces relies on experts with profound domain knowledge and technical expertise, to design an interface that are tailored for common user tasks. Although interface toolkits and development libraries make software development less painful, software engineering still requires a significant technical effort.  In addition, identifying and understand user tasks is fundamentally hard.  For these reasons, it is currently not possible to provide tailored (or _precise_) interfaces for every user and every task.

Our lab envisions a data-driven approach to generate task-relevant interactive interfaces. Our key observation is that interactive interfaces are designed to help express a universe of possible programs; thus, a sample of programs may help derive interactive interfaces.  To this end, _Precision Interfaces_ is a language-agnostic system that examines an input program log, identifies how the programs {\it structurally change}, and generates interactive web interfaces to express these structural changes.   Our current system supports two query languages, SQL and SPARQL, and can analyze logs contain >50k programs in less than 10 minutes.

