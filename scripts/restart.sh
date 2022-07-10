#!/bin/bash
cd infra/k8s/
kubectl apply -f auth-depl.yaml
kubectl apply -f user-depl.yaml
kubectl apply -f client-depl.yaml
kubectl rollout restart deployment auth-depl
kubectl rollout restart deployment user-depl
kubectl rollout restart deployment client-depl
kubectl apply -f ingress-srv.yaml