{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
*/}}
{{- define "fullname" -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a webui web adress.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
*/}}
{{- define "webui" -}}
{{- $url := default .Values.apihost .Values.nameOverride -}}
{{- printf "%s.%s" .Release.Name .Values.apihost | trunc 63 | trimSuffix "." -}}
{{- end -}}

{{/*
Create a webui web webuipath.
*/}}
{{- define "webuipath" -}}
{{- default .Values.env.webuipath .Values.nameOverride -}}
{{- end -}}
{{/*
Create a webui web gitrepourl.
*/}}
{{- define "gitrepourl" -}}
{{- default .Values.env.gitrepourl .Values.nameOverride -}}
{{- end -}}
{{/*
Create a webui web gitbranch.
*/}}
{{- define "gitbranch" -}}
{{- default .Values.env.gitbranch .Values.nameOverride -}}
{{- end -}}
{{/*
Create a webui web gitreposynctime.
*/}}
{{- define "gitreposynctime" -}}
{{- default .Values.env.gitreposynctime -}}
{{- end -}}