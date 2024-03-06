import numpy as np
import pandas as pd

data_Array=np.array([["John","Mike"],["Dave","Smith"]])
data_df=pd.DataFrame(data_Array,columns=["First Name","Last Name"])
data_json=data_df.to_json()
print(data_json)