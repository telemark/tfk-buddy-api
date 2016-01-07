SELECT
  mv.ID as groupId,
  mv.AttributeName as memberType,
  mv.StringValue as username,
  o.Firstname as firstName,
  o.Midlename as middleName,
  o.Lastname as lastName,
  o.SSN as ssn
FROM
  dbMetakatalog.dbo.tblMultiValue mv,
  dbMetakatalog.dbo.tblObjects o
WHERE
  mv.StringValue = o.ID
  AND mv.AttributeName = 'Member'
  AND mv.ID = '@groupId'
