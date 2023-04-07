#!/bin/zsh

if [[ $(command -v python3) ]]; then
    echo "Python 3 is already installed."
else
    echo "Python 3 is not installed. Installing now..."

    if [[ $(xcode-select -p) ]]; then
        echo "Xcode command-line tools are already installed."
    else
        echo "Xcode command-line tools are not installed. Installing now..."
        xcode-select --install
    fi

    if [[ $(command -v brew) ]]; then
        echo "Homebrew is already installed."
    else
        echo "Homebrew is not installed. Installing now..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    fi

    brew update && brew upgrade

    brew install python
fi

if [[ $(command -v sfdx) ]]; then
  echo "Salesforce CLI is already installed. Updating now..."
  sfdx update
else
  echo "Salesforce CLI is not installed. Installing now..."
  brew install sfdx-cli
fi

sf org login web --alias VisualStudioCodeSandbox --instance-url https://test.salesforce.com --set-default

sfdx force source manifest create --fromorg VisualStudioCodeSandbox --manifestname=allMetadata --outputdir manifest

python3 metadata_splitter.py

# sf command to retrieve source from manifest, not working for some reason, using sfdx command instead
# sf project retrieve start -x ./manifest/package.xml

sfdx force:source:retrieve -x ./manifest/package.xml
