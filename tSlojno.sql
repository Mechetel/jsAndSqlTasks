SELECT cb_vendorinformation.GroupID,CompanyName,Count(*) AS "Count"
FROM cb_vendorinformation CROSS JOIN  maintable_VGV1C
ON maintable_VGV1C.GroupID = cb_vendorinformation.GroupID
GROUP BY maintable_VGV1C.GroupID
ORDER BY count(*) ASC,cb_vendorinformation.GroupID
