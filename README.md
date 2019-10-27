# Esquio Github Action rollout feature

With this Esquio Github action you can enable a feature in an Github Actions workflow.[Esquio](https://esquio.readthedocs.io/en/latest/).

Please read [Esquio readthedocs](https://esquio.readthedocs.io/en/latest/) first to fully understand Esquio Feature Toggle package configuration and possibilities.

## Parameters needed

- **esquioUrl**: Url to the ESquio Api. i.e.: https://myesquioui.deployment.com
- **esquioApiKey**: API key to authenticate to esquio. Recommended to store as [Github secret](https://help.github.com/en/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables)
- **flagId**: Id of the flag to enable.

## Example

```YAML
      - name: Esquio rollout
        uses: actions/esquio-rollout
        id: esquio-rollout
        with:
          esquioUrl: 'https://esquiodemoui.azurewebsites.net/'
          esquioApiKey: ${{ secrets.apikey }}
          flagId: 55
```
