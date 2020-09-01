import yaml
from yaml import load, dump
try:
      from yaml import CLoader as Loader, CDumper as Dumper
except ImportError:
      from yaml import Loader, Dumper

import pandas
df = pandas.read_csv("pubs.csv")
data = df.T.to_dict().values()

for d in data:
  d['tags'] = [v.strip() for v in d['tags'].split(",")]

output = dump(data, default_flow_style=False, default_style='', indent=2)
with file("pubs.yml", "w") as f:
  f.write(output)
