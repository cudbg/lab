---
layout: project
color: "#f77d49"
logo: ML Explanation
tagline: 
# Tags is a comma separated list of the publication tags in _data/pubs.yml
tags: 
- mlexplain
- ml
---


<div class="callout">
Debugging and Interpreting Machine Learning Models
</div>

Machine learning models are increasingly used in critial real-world applications such as self-driving cars, loan processing, fake news detection, and more.  However these models are highly complex and have a reputation for being "black boxes" -- when they make a prediction, it is unclear how the decision was made.  Similarly, it is not clear _what_ the model is using to make a prediction and how changes in the data would affect its predictions.  

To this end, our lab develops algorithms to interpret complex machine learning models (e.g., deep neural networks, random forests, etc) by identifying training data that affected a prediction, describing what parts of the model are learning, and how user generated inputs can be improved to better help the model.

## FACE PALM

When a Deep Neural Network makes a misprediction,  it can be challenging for a developer to understand why. While there are many models for interpretability in terms of predictive features, it may be more natural to isolate a small set of training examples that have the greatest influence on the prediction. However, it is often the case that every training example contributes to a prediction in some way but with varying degrees of responsibility. 

Partition Aware Local Models (PALM) is a tool that learns and summarizes this responsibility structure to aide machine learning debugging.  PALM approximates a complex model (e.g., a deep neural network) using  a  two-part  surrogate  model:  a  meta-model  that  partitions the  training  data,  and  a  set  of  sub-models  that  approximate  the patterns within each partition. These sub-models can be arbitrarily complex to capture intricate local patterns.   However,  the meta-model is constrained to be a decision tree.  This way the user can examine the structure of the meta-model, determine whether the rules match intuition, and link problematic test examples to responsible training data efficiently. Queries to PALM are nearly 30x faster than nearest neighbor queries for identifying relevant data, which is a key property for interactive applications

## Segment-Predict-Explain

Segement-Predict-Explain is a pattern for generating content-specific feedback for users writing text content such as product reviews, housing listings, posts.  It uses a novel perturbation-based technique to generate _Prescriptive Explanations_.  This technique uses a quality prediction model and the features of the user's input text, and assigns responsibility to each feature in proportion to the amount that it will contribute to improving the model's predicted quality.  This can be used to generate feedback to explain why the user's writing is low quality and specific suggests on how to improve the writing.  

