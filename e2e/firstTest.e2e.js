describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have playlist title', async () => {
    await expect(element(by.id('homeTitle'))).toBeVisible()
    //await expect(element(by.text('Playlists'))).toBeVisible()
    await expect(element(by.text('Playlists'))).toHaveText('Playlists')
  });

  it('should show playButton after tap at Player tab', async () => {
    await element(by.id('Player')).tap()
    await expect(element(by.id('playButton'))).toBeVisible()
    await element(by.id('playButton')).tap()
  });

  it('should fill the form', async () => {
    const nameField = await element(by.id('nameField'))
    const lastNameField = by.id('lastNameField')
    const ageField = by.id('ageField')
    const tabForm = by.id('Form')

    await element(tabForm).tap()
    nameField.tap()
    nameField.typeText('Fulano')
    nameField.tapReturnKey()

    await element(lastNameField).tap()
    await element(lastNameField).typeText('Da silva')
    await element(lastNameField).tapReturnKey()
    
    await element(ageField).tap()
    await element(ageField).typeText('20')
    await element(ageField).tapReturnKey()
  });

  it('should scroll at the playlist until bottom', async () => {
    await element(by.id('flatListScroll')).scrollTo('bottom')
  });

});
