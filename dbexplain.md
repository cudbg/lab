---
layout: project
color: "#f77d49"
logo: Data Explanation
tagline: 
# Tags is a comma separated list of the publication tags in _data/pubs.yml
tags: dbexplain
---

<div class="callout">
Answering "why did this happen?"
</div>

Data analysis is rarely a one-off linear process -- it requires performing analyses, and carefully studying and understanding the results.  The latter process is particularly challenging because analysts lack tools to help understand _why_ analysis results look strange, contain outliers, or have patterns that differ  from their expectations.    Our lab develops tools and algorithms to provide user-understandable explanations.  

<!-- Visualizations are excellent for exposing surprising patterns and outliers in data, however existing tools have no way to help explain those patterns and outliers. We are exploring systems to generate sensible explanations for outliers in analytics visualizations. -->




## Scorpion

Consider a simple analytic query that computes a company's total expenses by month, and shows that last month's expenses was unexpectedly high. The analyst will naturally want to understand why -- perhaps the company has put more resources into a new customer demographic, or a department is overspending.

Currently, the analyst must manually split the input data along different dimensions (e.g., dept, customer age), and hope that re-running the query will cause changes. If there is more than one outlier, or many dimensions in the dataset, this ad-hoc process quickly becomes untenable.

Scorpion is a library that helps answer these "why" questions. The user simply selects examples of outlier and normal results and Scorpion will look for subsets of the input table that potentially explains the outliers and finds a combination of attribute values (predicate) that describes that subset. To find such predicates, we develop a score for how much influence a predicate on the outliers, and design efficient algorithms to find predicates with lots of influence.

#### Get Scorpion

Scorpion is a python library that can be installed using pip:

    pip install scorpion

After Scorpion is installed, DBWipes will be able to use the library to interactively explain outliers in its visualization.

[Check out the github page](https://github.com/sirrice/scorpion) for code and usage instructions.


## QFix 

Traditional database cleaning and explanation research has focused on techniques such as anomaly/outlier detection, dimensionality reduction, data summarization, predicate synthesis, ETL, and others, as ways to prevent, detect, or resolve (clean) data errors.

However, these data oriented approaches ignore a key vector of data errors – queries! The majority of user facing systems – billing, HR, customer service, web application – generate queries based on user submissions. Can we use the sequence of past queries from the transaction log to both find and repair incorrect errors due to user slip-ups?

QFix is a fundamentally novel approach towards getting to the root cause of errors in your database. Instead of describing data errors by examining data in the database, explains and fixes data errors by analyzing your past queries and suggests ways to repair the incorrect queries that it finds.

## DBWipes

DBWipes is a lightweight interactive visualization tool that lets users run aggregation queries over a database and interactively filter the dataset along different dimensions. Users can execute SQL GROUP-BY queries through a simple form interface, and render the results as a scatterplot. DBWipes renders a histogram of each attribute that users use to select and filter subsets of the attribute's values. Using this tool, users can easily compare the results of an aggregation query over different subsets of the data.

DBWipes currently connects to a PostgreSQL backend, which executes the queries that are issued by the interface.

#### Get DBWipes

DBWipes is a python web-application can be installed using pip:

    pip install dbwipes

[Check out the github page](https://www.github.com/sirrice/dbwipes) for code and usage instructions


