# Azure CLI Cheat Sheet (Basics)

Login:
  az login
  az account show
  az account list

Resource groups:
  az group list
  az group create -n rg-demo -l eastus
  az group delete -n rg-demo --yes --no-wait

List resources in RG:
  az resource list -g rg-demo

Habit:
  Always confirm subscription before deploying.
