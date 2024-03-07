def scrape_olx():
    url = "https://www.olx.in/scooters_c1413"
    html = urlopen(url)
    soup = BeautifulSoup(html, 'lxml')
    info = soup.find_all('span')
    img = soup.find_all('figure')
    info1 = soup.find_all('div')

    list_img = []
    price1 = []
    details1 = []
    title1 = []
    subtitle1 = []

    for j in img:
        if (j.get('data-aut-id') == 'itemImage'):
            for child in j.descendants:
                if child.name == 'img':
                    list_img.append(child.get('src'))

    for i in info:
        if (i.get('data-aut-id') == 'itemPrice'):
            price1.append(i.string)
        if (i.get('data-aut-id') == 'itemDetails'):
            details1.append(i.string)
        if (i.get('data-aut-id') == 'itemTitle'):
            title1.append(i.string)
        if (i.get('data-aut-id') == 'itemSubTitle'):
            subtitle1.append(i.string)

    for i in info1:
        if (i.get('data-aut-id') == 'itemPrice'):
            price1.append(i.string)
        if (i.get('data-aut-id') == 'itemDetails'):
            details1.append(i.string)
        if (i.get('data-aut-id') == 'itemTitle'):
            title1.append(i.string)
        if (i.get('data-aut-id') == 'itemSubTitle'):
            subtitle1.append(i.string)

    col = ['price', 'details', 'title', 'subtitle', 'img', 'score']
    df = pd.DataFrame(columns=col)
    count = 0
    for row in price1:
        entry = []
        score = 0

        # Calculate score based on presence of price and image
        if price1[count]:
            score += 30
        if list_img[count]:
            score += 30

        # Check if product name matches image (optional)
        # You can replace this condition with your specific logic
        if title1[count] and subtitle1[count]:
            if title1[count].lower() in subtitle1[count].lower() or subtitle1[count].lower() in title1[count].lower():
                score += 10

        entry.extend([price1[count] if price1[count] else "",
                      details1[count] if details1[count] else "",
                      title1[count] if title1[count] else "",
                      subtitle1[count] if subtitle1[count] else "",
                      list_img[count] if list_img[count] else "",
                      score])
        count += 1
        df.loc[count] = entry

    # Sort dataframe by score in descending order
    df = df.sort_values(by='score', ascending=False)
    return df.to_dict(orient='records')
