import pandas as pd

def get_result(data):
    import joblib

    rf_opt = joblib.load("fetal.pkl")

    user_data = pd.DataFrame(data,index=[0])

    y_test_rf = rf_opt.predict(user_data)

    return y_test_rf