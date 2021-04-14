import os
import random
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB


def import_data(path):
    category_path = path
    categories = os.listdir(category_path)  # list of labels
    categories.sort()

    data_dict = dict()  # map of (label_index, text)

    # set all files into this map
    for index in range(len(categories)):
        category = categories[index]
        text_path = category_path + "/" + category
        files = os.listdir(text_path)
        files.sort()
        for file in files:
            f = open(text_path + "/" + file, errors='ignore')
            data_dict[f.read()] = index

    # this step is to disorder the input files
    texts = list(data_dict.keys())
    random.shuffle(texts)
    targets = []
    for text in texts:
        targets.append(data_dict[text])

    return texts, targets, categories


# MultinomialNB
def multinomial_naive_bayesian():
    data_train, targets_train, categories = import_data('data/train')

    # extract tf-idf features
    vectorizer = TfidfVectorizer()
    vectors_train = vectorizer.fit_transform(data_train)

    # train
    clf = MultinomialNB(alpha=0.01)
    clf.fit(vectors_train, targets_train)
    print("train finished")

    return clf, vectorizer, categories


# clf, vectorizer = multinomial_naive_bayesian()


def classify_email(file, clf, vectorizer):
    data = [file]
    vectors_test = vectorizer.transform(data)
    pred = clf.predict(vectors_test)
    return pred[0]
